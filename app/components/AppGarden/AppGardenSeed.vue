<script setup lang="ts">
    type GardenCardProps = {
        to: string
        icon?: string
        title: string
        description: string
        tag: string
        date: string
    }

    const props = withDefaults(defineProps<GardenCardProps>(), {
        icon: "bxs-leaf",
    })
</script>

<template>
    <NuxtLink 
        :to="props.to"
        class="flex gap-4 mb-4 break-inside-avoid rounded-md p-4 cursor-pointer transition ease-in duration-250 border border-background group hover:bg-white hover:border-perimeter hover:scale-105">
        <UIcon :name="props.icon" class="text-2xl shrink-0 text-brand mt-1" />
        
        <div class="flex flex-col gap-3">
            <h2 class="text-xl text-paragraph font-serif transition-colors ease-in-out duration-250 group-hover:text-accent">
                {{ props.title }}
            </h2>

            <p class="text-justify text-description">
                {{ props.description }}
            </p>
            
            <div class="text-description">
                <span >
                    {{ props.tag }}
                </span> 
                &#x2022;
                <span>
                    {{ props.date }}
                </span>
            </div>
        </div>
    </NuxtLink>
</template>