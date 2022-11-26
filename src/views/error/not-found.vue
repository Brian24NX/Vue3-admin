<template>
    <error-page title="404 Page not found" description="Sorry, the page does not exist">
        <template #image>
            <img src="@/assets/images/not-found.png" />
        </template>
    </error-page>
</template>

<script lang="ts" setup>
import ErrorPage from "@/components/ErrorPage.vue";
</script>

<style scoped>

</style>