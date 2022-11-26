<template>
    <div class="main">
        <div class="content">
            <slot name="image"><img src="@/assets/images/not-found.png" /></slot>

            <div class="info">
                <div class="title">{{ title }}</div>
                <div class="description">{{ description }}</div>
                <t-button @click="$router.replace({ path: '/' })">Back to homepage</t-button>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
interface Props {
    title: string;
    description: string;
}

withDefaults(defineProps<Props>(), {
    title: "Unknown error",
    description: "Oops...it seems like we lost this page",
});
</script>
  
<style lang="less"> // scoped deleted --- <slot name="image"> exported
.main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
        display: flex;
        align-items: center;
        height: 320px;

        img {
            height: 90%;
        }

        .info {
            margin-left: 40px;

            .title {
                font-size: 40px;
                font-weight: bold;
                margin-bottom: 20px;
            }

            .description {
                font-size: 19px;
                color: #525151;
                margin-bottom: 50px;
            }
        }
    }
}
</style>