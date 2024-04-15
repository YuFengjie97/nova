<script lang="ts" setup>
import { ref } from 'vue'
import SnowyBg from './three/SnowyBg.vue'

// import NavGrid from '@/components/NavGrid.vue'
import { outlink, router, routes } from '@/router'

interface Link {
  isOut: boolean
  title: string
  path: string
}
interface LinkGroup {
  type: string
  groupTitle: string
  des: string
  links: Link[]
}

const list = ref<LinkGroup[]>([])

// @ts-expect-error fefefe
list.value.push(...routes.map((item) => {
  const res = {
    type: '',
    groupTitle: item.meta!.name,
    des: item.meta?.des ?? '',
    links: item.children!.reduce((acc, cur) => {
      if (!cur.meta!.visable)
        return acc

      ; (acc as Link[]).push({
        isOut: false,
        title: cur.meta!.name as string,
        path: `${item.path}/${cur.path}`,
      })
      return acc
    }, []),
  }

  return res
}))

list.value.push(outlink.reduce((acc, cur) => {
  if (!cur.meta.visable)
    return acc

  ;(acc.links as Link[]).push({
    isOut: true,
    title: cur.meta.name,
    path: cur.path,
  })
  return acc
}, {
  type: 'outlink',
  groupTitle: '外链',
  des: '',
  links: [],
}))

function handleLink(link: Link) {
  const { isOut, path } = link
  if (isOut) {
    window.open(path, '_blank')
    return
  }

  const routeLocation = router.resolve({ path })
  window.open(routeLocation.href, '_blank')
}
</script>

<template>
  <div class="bg-#b4286c relative w-full h-full overflow-hidden flex justify-center items-center">
    <SnowyBg class="snowBg absolute z-1 top-0 left-0 pointer-events-none" />
    <!-- <NavGrid /> -->
    <div class="w-full h-full absolute p-y-4rem z-2 overflow-y-scroll">
      <div v-for="(group, i) in list" :key="i" class="nav-item">
        <h1>
          {{ group.groupTitle }}
        </h1>
        <span v-show="group.des" class="des"> > {{ group.des }}</span>
        <div class="list-wrap">
          <div v-for="(link, j) in group.links" :key="j" class="link-wrap" @click="handleLink(link)">
            <span class="link">
              {{ link.title }}
            </span>
            <!-- <router-link v-if="group.type !== 'outlink'" target="_blank" class="link" :to="link.path">
              {{ link.title }}
            </router-link>
            <a v-else class="link" :href="link.path" target="_blank">{{ link.title }}</a> -->
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

  .des {
    width: fit-content;
    display: block;
    color: #fff;
    font-style: italic;
    margin-bottom: 10px;
    background-color: #000;
    border-radius: 2px;
    padding: 4px 0;
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
    cursor: pointer;

    &::before {
      position: absolute;
      bottom: 0;
      transform: translateX(-50%);
      left: 50%;
      width: 0;
      content: '';
      height: 3px;
      background-color: #000;
      transition: width .3s;
      ;
    }

    &:hover {
      &::before {
        width: 100%;
      }
    }
  }

}
</style>
