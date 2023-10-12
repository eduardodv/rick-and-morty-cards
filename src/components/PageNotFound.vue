<script setup lang="ts">
  import type { RouterLink } from 'vue-router';
  import { useHead } from '@unhead/vue'

  useHead({
    title: 'Page not found | Rick and Morty Cards'
  })
</script>

<template>
  <div class="page-not-found">
    <div class="space"></div>
    <div class="container">
				<div class="img-wrapper">
					<span>44</span>
				</div>
				<h1 data-cy="title">The page you are trying to search has been moved to another universe.</h1>
				<RouterLink data-cy="button" to="/">GET ME HOME</RouterLink>
			</div>
		</div>
</template>

<style lang="scss">
  .page-not-found {
    width: 100%;
    min-height: 100svh;
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    padding-bottom: 3rem;

    .container {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 100%;
    }

    span {
      &:first-letter{
        letter-spacing: 12rem; 
      }

      position: relative;
      font-weight: 900;
      font-size: 16rem;
      display: block;

      &:before {
        content:'';
        background-image: url('../assets/bg-not-found.png');
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;    
        animation: rotateIn 0.5s ease-out;
      }
    }

    h1 {
      max-width: 450px;
      text-align: center;
      font-style: italic;
      font-weight: normal;
      font-size: 1.3rem;
      color: var(--text-color);
      margin: -1.3rem auto 1rem;
      line-height: 1.3;
    }

    a {
      background: var(--color-blue);
      border: 0;
      padding: .8125rem 1.375rem;
      border-radius: 3.125rem;
      color: #fff;
      display: inline-block;
      cursor: pointer;
      font-weight: 900;
      line-height: 1;
      text-decoration: none;
      transition: all 0.2s ease;

      &:hover {
        color: var(--color-black);
        background: var(--color-lime);
      }
    }
  }

  .space {
    position: absolute;
    width: 400vw;
    height: 400vh;
    top: 50%;
    left: 50%;
    z-index: 1;
    margin-top: -200vh;
    margin-left: -200vw;
    animation: spin 240s linear infinite;
    background-size: 240px;
    backface-visibility: visible;
    filter: var(--color-filter-image-space);
    background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0MCAyNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxyZWN0IHg9IjEwNiIgeT0iOTAiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz48cmVjdCB4PSI3NCIgeT0iNjMiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIyMyIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSI1MCIgeT0iMTEwIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iNjMiIHk9IjEyOCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjQ1IiB5PSIxNDkiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSI5MiIgeT0iMTUxIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iNTgiIHk9IjgiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxNDciIHk9IjMzIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+PHJlY3QgeD0iOTEiIHk9IjQzIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iMTY5IiB5PSIyOSIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjE4MiIgeT0iMTkiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxNjEiIHk9IjU5IiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iMTM4IiB5PSI5NSIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjE5OSIgeT0iNzEiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIzIiBoZWlnaHQ9IjMiLz48cmVjdCB4PSIyMTMiIHk9IjE1MyIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPjxyZWN0IHg9IjEyOCIgeT0iMTYzIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iMjA1IiB5PSIxNzQiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxNTIiIHk9IjIwMCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjUyIiB5PSIyMTEiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz48cmVjdCB5PSIxOTEiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxMTAiIHk9IjE4NCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjwvc3ZnPg==);
  }

  @keyframes spin {
    from {
      transform: rotate( 0deg );
    }
    
    to {
      transform: rotate( -360deg );
    }
  }

  @keyframes rotateIn {
    from {
      transform: rotate( 0deg ) scale(0.2);
      opacity: 0;
    }
    to {
      transform: rotate( 360deg ) scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 575.98px) {
    .page-not-found {
      span {
        &:first-letter{
          letter-spacing: 5rem; 
        }

        font-size: 10rem;
      }
    }
  }
</style>