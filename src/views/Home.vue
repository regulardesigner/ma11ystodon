<template>
  <header class="mallystodon">  
    <h1 class="heading"><router-link :to="{ name: 'home' }">{{ `M${search}Stodon` }}</router-link></h1>

    <div class="switch">
      <input type="checkbox" name="switch" id="switch">
      <label for="switch">Color theme inverter</label>
    </div>
  </header>
  
  <span class="is-loading" v-if="isLoading"><div class="loading"></div>Loading toots…</span>

  <section v-if="!isLoading" class="toots">
    <div class="search">
      <form class="search-form" @submit.prevent="handleTagSeach">
        <input class="search-form--input" type="text" v-model="search">
        <input class="search-form--submit" type="submit" value="search">
      </form>
      
      <ul class="tags">
        <li class="tag medium" v-for="tag in searched" :key="tag"><router-link :to="{ name: 'tags', params: { id: tag } }">{{ tag }}</router-link></li>
      </ul>

    </div>
    <article class="toot" v-for="toot in toots" :key="toot.id">
    <header class="user-header">
      <img class="avatar" width="32" height="32" :src="toot.account.avatar" :alt="toot.account.username"><strong>{{toot.account.display_name || toot.account.username}}</strong> - @{{toot.account.username}}
    </header>

    <div class="large" v-html="toot.content"></div>

    <figure v-if="toot.media_attachments.length != 0 && toot.media_attachments[0].type === 'image'">
      <img class="attachment-image" :src="toot.media_attachments[0].preview_url" :alt="toot.media_attachments[0].description">
      <figcaption class="medium">{{ toot.media_attachments[0].description }}</figcaption>
    </figure>
  </article>
  </section>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      search: 'a11y',
      searched: [],
      toots: undefined,
      tootsCount: 0,
      isLoading: true,
    };
  },

  async mounted() {
     this.mastodonTagSearch(this.search)
  },

  methods: {
    handleTagSeach() {
      this.mastodonTagSearch(this.search)
    },

    async mastodonTagSearch(tag) {
      await this.$axios.get(
        `/api/v1/timelines/tag/${tag}?limit=4`
      ).then(resp => {
        if (!this.toots) {
          this.toots = resp.data
          this.tootsCount = resp.data.length
        } else {
          this.toots.unshift(...resp.data)
          this.tootsCount = this.toots.length

        }

        console.info(`Toots: ${this.tootsCount}`)
        this.addTagToSearchedList(tag)
        this.isLoading = false
      });
    },

    addTagToSearchedList(tag) {
      this.searched.unshift(tag)
    }
  }
};
</script>

<style>
html {
  font-size: 62.5%;
}

body {
  --background-color: #0e302a;
  --text-color: #f8ff99;
  font-size: 1rem;
  background-color: var(--background-color);
}

body:has(input[type="checkbox"]:checked) {
   --background-color: #f1f6a5;
   --text-color: #2b584f;
}

header.mallystodon {
  display: flex;
  margin-bottom: 2.4rem;
  justify-content: space-between;
}

.search-form {
  display: flex;
  margin-bottom: 1.6rem;
}

.search-form--input {
  color: var(--text-color);
  flex-grow: 1;
  font-size: 2rem;
  padding: 0.6rem 0.8rem;
  border: 0.1rem solid var(--text-color);
  border-radius: 0.5rem 0 0 0.5rem;
  background: transparent;
}

.search-form--submit {
  border: none;
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: 0 0.5rem 0.5rem 0;
  color: var(--background-color);
  background-color: var(--text-color);
} 

.switch {
  padding: 0.6rem;
  display: inline-flex;
  border-radius: 0.3rem;
  flex-direction: row;
  align-items: center;
  background-color: var(--text-color);
  color: var(--background-color);
}

.switch input#switch {
  margin: 0 0.4rem 0 0;
  padding: 0;
  width: 2.2rem;
  height: 2.2rem;
}

.switch label {
  font-size: 1.4rem;
}

.tags {
  display: inline-flex;
  overflow: hidden;
  list-style: none;
  margin: 0 0 2rem 0;
  padding: 0;
  border-radius: 0.5rem;
  box-shadow: inset black 0px 0px 10px;
}

.tag {
  flex-shrink: 0;
  margin: 0;
  padding: 0 0.6rem;
  border-radius: 0.5rem;
  background-color: var(--text-color);
  color: var(--background-color);
}

.tag a {
  color: var(--background-color);
  text-decoration: none;
}

.tag:not(:last-child) {
  margin-right: 0.5rem;
}

.heading {
  font-size: 2.4rem;
  color: var(--text-color);
  margin: 0;
}

a {
  color: var(--text-color);
  font-weight: 500;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

.toots {
  max-width: 50rem;
  margin: 0 auto;
}

.toot {
  border: 2px solid var(--text-color);
  border-radius: .5rem;
  padding: 1rem;
  margin-bottom: 2.4rem;
  line-height: 2rem;
}

.avatar {
  border-radius: 2rem;
  margin-right: 0.6rem;
  outline-color: var(--text-color);
  outline-style: solid;
  outline-width: 0.1rem;
  outline-offset: 0.3rem;
}

figure {
  line-height: 1rem;
  border-radius: 0.5rem;
  background-color: var(--text-color);
  overflow: hidden;
  margin: 0;
}

figcaption {
  padding: 0 0.6rem;
  color: var(--background-color);
}

.attachment-image {
  width: 100%;
  height: auto;
}

.medium {
  font-size: 1.6rem;
  line-height: 2.6rem;
}

.large {
  color: var(--text-color);
  font-size: 2.2rem;
  line-height: 3.2rem;
}

.text--color-light {
  color: var(--text-color);
}

.text--color-dark {
  color: var(--background-color);
}

.is-loading {
  color: var(--text-color);
  margin: 0 auto;
  display: block;
  position: absolute;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
  top: calc(50vh - 6.5rem);
  left: calc(50% - 6.5rem);
}

.user-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--text-color);
  font-size: 1.6rem;
}

/* loading */
.loading {
  width: 13rem;
  aspect-ratio: 1;
  position: relative;
}
.loading:before,
.loading:after {
  content: "";
  position: absolute;
  border-radius: 5rem;
  box-shadow: 0 0 0 0.5rem inset var(--text-color);
  animation: loadingCycle ease-in-out 2.5s infinite;
}
.loading:after {
  animation-delay: -1.25s;
}
@keyframes loadingCycle {
  0% {
    inset: 0 7rem 7rem 0;
  }
  12.5% {
    inset: 0 7rem 0 0;
  }
  25% {
    inset: 7rem 7rem 0 0;
  }
  37.5% {
    inset: 7rem 0 0 0;
  }
  50% {
    inset: 7rem 0 0 7rem;
  }
  62.5% {
    inset: 0 0 0 7rem;
  }
  75% {
    inset: 0 0 7rem 7rem;
  }
  87.5% {
    inset: 0 0 7rem 0;
  }
  100% {
    inset: 0 7rem 7rem 0;
  }
}

</style>