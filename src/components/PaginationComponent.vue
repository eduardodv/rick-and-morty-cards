<script setup lang="ts">
  
</script>

<template>
  <section id="pagination">
    <strong>Página</strong>
    <div>
      <button class="active">1</button>
      <button>2</button>
      <button>3</button>
      <span>...</span>
      <button>100</button>
    </div>
  </section>
</template>

<style lang="scss">
  #pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .625rem;
    margin-bottom: 2.5rem;
    font-size: 1.25rem;
    
    > div {
      display: flex;
      gap: 8px;
      
      button, span {
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        height: 2rem;
        min-width: 2rem;
        border: 0;
        padding: .375rem .25rem;
        border-radius: 5px;
        background: none;
        color: var(--color-pagination);
        border: 1px solid var(--color-pagination);
        transition: all 0.2s ease;
      }

      button {
        cursor: pointer;

        &:hover, &.active {
          color: var(--color-pagination-text);
          background: var(--color-pagination);
        }

        &.active {
          pointer-events: none;
        }
      }
    }
  }
</style>
