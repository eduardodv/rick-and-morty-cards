<script setup lang="ts">

</script>

<template>
  <section id="filter-status">
    <span>Filter by:</span>
    <div class="buttons">
      <button class="active">Alive</button>
      <button>Dead</button>
      <button>Unknown</button>
    </div>
  </section>
</template>

<style lang="scss">
  #filter-status {
    margin: 1rem 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-weight: bold;
      margin-right: 1rem;
    }
    
    .buttons {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      gap: 10px;
      padding: 0;

      button {
        background: none;
        padding: 7px 20px;
        border-radius: 50px;
        cursor: pointer;
        border: 0;
        color: var(--color-black);
        background-color: var(--color-gray);
        transition: all 0.2s ease;

        &:focus-visible {
          outline: none;
          box-shadow: 0 0 0 4px var(--color-lime);
        }

        &.active {
          opacity: 1 !important;
          background: var(--color-lime);
        }
      }
    }
  }

  @media (hover: hover) {
    #filter-status {
      .buttons {
        button {
          &:not(:hover) {
            opacity: 0.7;
          }
        }
      }
    }
  }

  @media (max-width: 575.98px) {
    #filter-status {
      flex-direction: column;

      span {
        margin-right: 0;
      }

      .buttons {
        margin-top: 0.6rem;
      }
    }
  }
</style>
