const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="w-full py-10">
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto">
                <div
                    class="border-t md:flex-row flex-col gap-5 border-gray-200 pt-5 flex items-center justify-between ">
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