<script>
    import boxes from "../data/boxes"
    const projectStyle =
        'space-y-3 p-10 hover:bg-secondaryGreen w-full h-full transition-colors duration-300 group ';
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 animate-fadein delay-75">
    {#each boxes as box}
        <a href="{box.link}" target="_blank">
            <div class="{projectStyle}">
                <img
                        src="{box.imgLink}"
                        alt="{box.altDesc}"
                        class="w-full h-auto border-none p-0 mb-8"
                />
                <h1 class="font-bold text-lg md:text-xl">
                    {box.title}
                </h1>
                <h2 class="italic underline">
                    {box.link}
                </h2>
                <p class="text-xs md:text-sm text-justify">
                    {box.description}
                </p>
            </div>
        </a>
    {/each}
</div>
