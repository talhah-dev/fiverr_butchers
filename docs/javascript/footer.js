const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="w-full py-14">
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto">
                <a data-aos="zoom-in" href="/index.html" class="flex justify-center ">
                    <img src="/docs/assets/images/logo.png" class="md:h-32 h-20" alt="">
                </a>
                <ul data-aos="fade-up"
                    class="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 pt-12 ">
                    <li><a href="/index.html" class="hover:text-[#a21410] transition-all duration-500">Home </a>
                    </li>
                    <li><a href="/story.html" class="hover:text-[#a21410] transition-all duration-500">Story</a>
                    </li>
                    <li><a href="/menu.html" class="hover:text-[#a21410] transition-all duration-500">Menu</a></li>
                    <li><a href="/gallery.html" class="hover:text-[#a21410] transition-all duration-500">Gallery</a>
                    </li>
                </ul>
                <div
                    class="border-t md:flex-row flex-col gap-5 border-gray-200 pt-5 flex items-center justify-between mt-8">
                    <span class="text-lg text-gray-700 text-center block">© <span id="copyright"></span> Butchers of
                        Llanddarog. All rights reserved.</span>
                    <a href="#"
                        class="text-gray-700 hover:text-[#a21410] transition-all duration-500 transition-all">Privacy
                        policy</a>
                </div>
            </div>
        </div>
    </footer>
`

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year