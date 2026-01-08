<script setup lang="ts">
    const { data: seeds } = await useAsyncData('garden-list', () =>
        queryCollection('garden')
        .where('path', 'LIKE', '/garden/%')
        .select('path', 'title', 'description', 'type', 'date')
        .all()
    )
</script>

<template>
    <NuxtLink 
        v-for="seed in (seeds || [])" 
        :to="seed.path"
        class=
            "
                flex gap-4 mb-4 break-inside-avoid rounded-md p-4 
                cursor-pointer transition ease-in bg-white duration-250 border 
                border-background group hover:bg-white hover:border-perimeter 
                hover:scale-105
            "
    >
        <UIcon name="bxs-leaf" class="text-2xl shrink-0 text-brand mt-1" />
        
        <div class="flex flex-col gap-3">
            <h2 class="text-xl text-paragraph font-serif transition-colors ease-in-out duration-250 group-hover:text-brand">
                {{ seed.title }}
            </h2>

            <p class="text-justify text-description">
                {{ seed.description }}
            </p>
            
            <div class="text-description">
                <span >
                    {{ seed.type }}
                </span> 
                &#x2022;
                <span>
                    {{ seed.date }}
                </span>
            </div>
        </div>
    </NuxtLink>
</template>