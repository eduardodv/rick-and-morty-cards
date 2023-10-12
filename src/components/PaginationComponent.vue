<script setup lang="ts">
  import Vue3Paginate from "vue3-paginate";

  import { useCharacterStore } from '@/stores/characterStore';
  
  const store = useCharacterStore()

  const handlePageChange = (page: number) => {
    store.pageChange(page)
  }

  const isMobile = screen.width <= 767 ? true : false

</script>

<template>
  <section id="pagination">
    <vue3-paginate
      :currentPage="store.currentPageStore"
      :totalPage="(store.pageInfo.pages)"
      :pageCount="isMobile ? '3' : '8'"
      @pageChange="handlePageChange"
      paginationItemClass="item"
      paginationItemActiveClass="active"
      data-cy="pagination"
    >
    </vue3-paginate>
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
    
    ul {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;

      .item {
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font);
        height: 2rem;
        min-width: 2rem;
        border: 0;
        padding: .375rem .25rem;
        border-radius: 5px;
        background: none;
        color: var(--color-pagination);
        border: 1px solid var(--color-pagination);
        transition: all 0.2s ease;
        cursor: pointer;
        
        &.active {
          pointer-events: none;
          color: var(--color-pagination-text);
          background: var(--color-pagination);

          svg {
            fill: var(--color-pagination-text);
          }
        }

        a {
          font-weight: bold;
        }

        svg {
          fill: var(--color-pagination);
        }
      }
    }
  }

  @media (hover: hover) {
    #pagination {
      ul {
        .item {
          &:hover {
            color: var(--color-pagination-text);
            background: var(--color-pagination);

            svg {
              fill: var(--color-pagination-text);
            }
          }
        }
      }
    }
  }
</style>
