<script setup>
import { ref, computed, watch } from 'vue';
import { useEcomStore } from '@/stores/apps/eCommerce';
import { useRoute, useRouter } from 'vue-router';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import product1 from '@/assets/images/e-commerce/prod-1.png';
import product2 from '@/assets/images/e-commerce/prod-2.png';
import product3 from '@/assets/images/e-commerce/prod-3.png';
import product4 from '@/assets/images/e-commerce/prod-4.png';
import product5 from '@/assets/images/e-commerce/prod-5.png';
import product6 from '@/assets/images/e-commerce/prod-6.png';
import product7 from '@/assets/images/e-commerce/prod-7.png';
import product8 from '@/assets/images/e-commerce/prod-8.png';
import product9 from '@/assets/images/e-commerce/prod-9.png';

// icons
import { HeartOutlined } from '@ant-design/icons-vue';

const store = useEcomStore();
const route = useRoute();
const router = useRouter();

const currentSlide = ref(route.params.id - 1);
const slideShow = [
  { image: product1, id: 1 },
  { image: product2, id: 2 },
  { image: product3, id: 3 },
  { image: product4, id: 4 },
  { image: product5, id: 5 },
  { image: product6, id: 6 },
  { image: product7, id: 7 },
  { image: product8, id: 8 },
  { image: product9, id: 9 }
];

// 计算属性：合并数组，确保 v-for 只迭代一维数组
const slideArray = computed(() => {
  return [...slideShow.slice(currentSlide.value), ...slideShow.slice(0, currentSlide.value)];
});

// 处理滑动到指定项
function slideTo(val) {
  currentSlide.value = val;
}

watch(currentSlide, (newVal) => {
  router.replace(`/ecommerce/product/detail/${newVal + 1}`); // 路由替换时要确保索引是从1开始
});
</script>

<template>
  <div>
    <Carousel
      id="gallery"
      class="bg-gray100 rounded-md mb-4"
      aria-hidden="true"
      :items-to-show="1"
      :wrap-around="false"
      v-model:current-slide="currentSlide"
    >
      <Slide v-for="(slide, i) in slideArray" :key="i">
        <div class="carousel__item" aria-hidden="true">
          <img alt="product" :src="slide.image" class="w-100 rounded-md" />
          <v-btn variant="text" icon class="wishlistIcon" rounded aria-hidden="true">
            <HeartOutlined :style="{ fontSize: '18px' }" class="text-lightText" />
          </v-btn>
        </div>
      </Slide>
    </Carousel>

    <Carousel id="thumbnails" :current-slide="currentSlide" :transition="500" :items-to-show="6" :wrap-around="true" ref="carousel">
      <Slide v-for="(slide, i) in slideArray" :key="i">
        <div class="carousel__item cursor-pointer" @click="slideTo(slide.id - 1)">
          <v-card variant="outlined">
            <img alt="product" :src="slide.image" class="w-100" />
          </v-card>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss">
#thumbnails {
  .carousel__slide {
    border: 2px solid transparent;
    line-height: 0px;
    margin-inline: 6px;
    border-radius: 4px;
  }
  .carousel__slide--active {
    border: 2px solid rgb(var(--v-theme-primary));
  }
}
.wishlistIcon {
  position: absolute;
  right: 15px;
  top: 15px;
}
</style>
