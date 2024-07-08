<template>
    <div>
        <h1>Careers</h1>
        <p>Join our team!</p>
        <!-- Use router.currentRoute.value.params to access route parameters -->
        <pre>{{ router.params.id }}
            
        </pre>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'; // Correct the import statement

const router = useRoute();
</script>