<script lang="ts">
    interface Box {
        title: string;
        description: string;
        imgLink: string;
        altDesc: string;
        link: string;
        slug?: string;
    }

    export let boxes: Box[] = [];
    export let collection: string;
    
    const projectStyle =
        'space-y-3 p-10 hover:bg-secondaryGreen w-full h-full transition-colors duration-300 group rounded-sm';
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 animate-fadein delay-75 ">
    {#each boxes as box}
        <a href={`/${collection}/${box.slug}`}>
            <div class="{projectStyle}">
                <div class="w-full aspect-video mb-8 overflow-hidden">
                    <img
                        src={box.imgLink}
                        alt={box.altDesc}
                        class="w-full h-full object-cover rounded-sm"
                    />
                </div>
                <h1 class="font-bold text-lg md:text-xl">
                    {box.title}
                </h1>
                <p class="text-xs md:text-sm text-left">
                    {box.description}
                </p>
            </div>
        </a>
    {/each}
</div>
