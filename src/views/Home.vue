<script lang="ts" setup>
import { ref } from 'vue'
import SnowyBg from './three/SnowyBg.vue'

// import NavGrid from '@/components/NavGrid.vue'
import { outlink, routes } from '@/router'

interface Link {
  title: string
  path: string
}
interface LinkGroup {
  type: string
  groupTitle: string
  links: Link[]
}

const list = ref<LinkGroup[]>([])

list.value.push(...routes.map((item) => {
  const res = {
    type: '',
    groupTitle: item.meta!.name,
    links: item.children!.map((link) => {
      return {
        title: link.meta!.name,
        path: `${item.path}/${link.path}`,
      }
    }),
  }

  return res
}) as LinkGroup[])

list.value.push(outlink.reduce((acc, cur) => {
  if (!cur.meta.visable)
    return acc

  acc.links.push({
    title: cur.meta.name,
    path: cur.path,
  })
  return acc
}, {
  type: 'outlink',
  groupTitle: '外链',
  links: [] as Link[],
}))
</script>

<template>
  <div class="bg-#b4286c relative w-full h-full overflow-hidden flex justify-center items-center">
    <SnowyBg class="snowBg absolute z-1 top-0 left-0 pointer-events-none" />
    <!-- <NavGrid /> -->
    <div class="w-full h-full absolute p-y-4rem z-2 overflow-y-scroll">
      <div v-for="(item, i) in list" :key="i" class="nav-item">
        <h1>
          {{ item.groupTitle }}
        </h1>
        <div class="list-wrap">
          <div v-for="(link, j) in item.links" :key="j" class="link-wrap">
            <router-link
              v-if="item.type !== 'outlink'"
              target="_blank" class="link"
              :to="link.path"
            >
              {{ link.title }}
            </router-link>
            <a v-else class="link" :href="link.path" target="_blank">{{ link.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav-item {
  width: 100%;
  padding: 0 10rem;
  h1 {
    color: #fff;
  }

  .list-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .link-wrap {
    background: #eee;
    border-radius: 4px;
    margin: 0.1rem 0.1rem;
    padding: 0.5rem 0.8rem;
  }

  .link {
    font-size: 1.2rem;
    color: #000;
    position: relative;
    display: inline-block;
    padding: 0.5rem 0;

    &::before {
      position: absolute;
      bottom: 0;
      transform: translateX(-50%);
      left: 50%;
      width: 0;
      content: '';
      height: 3px;
      background-color: #000;
      transition: width .3s;;
    }

    &:hover {
      &::before {
        width: 100%;
      }
    }
  }

}
</style>
