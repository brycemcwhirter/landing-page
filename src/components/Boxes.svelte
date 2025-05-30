<script lang="ts">
    interface Box {
        title: string;
        description: string;
        imgLink: string;
        altDesc: string;
        link: string;
    }

    export let boxes: Box[] = [];
    
    const projectStyle =
        'space-y-3 p-10 hover:bg-secondaryGreen w-full h-full transition-colors duration-300 group';
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 animate-fadein delay-75">
    {#each boxes as box}
        <a href="{box.link}" target="_blank">
            <div class="{projectStyle}">
                <div class="w-full aspect-video mb-8 overflow-hidden">
                    <img
                        src="{box.imgLink}"
                        alt="{box.altDesc}"
                        class="w-full h-full object-cover"
                    />
                </div>
                <h1 class="font-bold text-lg md:text-xl">
                    {box.title}
                </h1>
                <p class="text-xs md:text-sm text-justify">
                    {box.description}
                </p>
            </div>
        </a>
    {/each}
</div>
