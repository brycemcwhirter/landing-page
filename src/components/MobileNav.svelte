<script>
    export let name;
    let isOpen = false;

    const toggleMenu = () => {
        isOpen = !isOpen;
    }
</script>

<div class="md:hidden">
    <!-- Top Bar -->
    <div class="flex items-center justify-between px-6 py-4 bg-primaryBlue/20 backdrop-blur-sm">
        <button 
            class="z-50 w-8 h-8 flex flex-col justify-center relative"
            on:click={toggleMenu}
        >
            <span 
                class="block w-8 h-0.5 bg-primaryWhite absolute transition-all duration-300 ease-in-out"
                style:transform={isOpen ? 'rotate(45deg)' : 'rotate(0) translate(0, -6px)'}
            ></span>
            <span 
                class="block w-8 h-0.5 bg-primaryWhite absolute transition-all duration-300 ease-in-out"
                style:opacity={isOpen ? '0' : '1'}
            ></span>
            <span 
                class="block w-8 h-0.5 bg-primaryWhite absolute transition-all duration-300 ease-in-out"
                style:transform={isOpen ? 'rotate(-45deg)' : 'rotate(0) translate(0, 6px)'}
            ></span>
        </button>
        <a href="/" class="text-xl font-semibold hover:opacity-80 transition-opacity">{name}</a>
        <div class="w-8"><!-- Empty div for spacing --></div>
    </div>

    <!-- Full Screen Menu -->
    {#if isOpen}
    <div class="fixed inset-0 bg-primaryBlue z-40 flex flex-col items-center justify-center space-y-8">
        <a 
            href="/developer" 
            class="text-2xl hover:text-primaryWhite/80 transition-colors"
            on:click={toggleMenu}
        >
            Developer
        </a>
        <a 
            href="/musician" 
            class="text-2xl hover:text-primaryWhite/80 transition-colors"
            on:click={toggleMenu}
        >
            Musician
        </a>
        <a 
            href="/content" 
            class="text-2xl hover:text-primaryWhite/80 transition-colors"
            on:click={toggleMenu}
        >
            Content
        </a>
        <a 
            href="/blog" 
            class="text-2xl hover:text-primaryWhite/80 transition-colors"
            on:click={toggleMenu}
        >
            Blog
        </a>
    </div>
    {/if}
</div>