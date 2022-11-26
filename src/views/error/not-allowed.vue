<template>
    <error-page title="403 Access denied"
        description="You are not authorized to access this page, please reach out to webmaster">
        <template #image>
            <img src="@/assets/images/not-allowed.png" />
        </template>
    </error-page>
</template>
  
<script lang="ts" setup>
import ErrorPage from "@/components/ErrorPage.vue";
</script>
  
<style scoped>

</style>