var page_loaded = false;
loading_in()
var delay_load = Math.floor(Math.random() * 0)

async function loaded() {
    page_loaded = true;
   
    //wait intill loading animate done
    await wait_for(delay_load + 350 + 40 *6 + 350)

    let loading_page = document.getElementById("loading_tag")
    loading_page.classList.add("loaded_w")
    let wrapper = document.getElementById("wrapper_main")
    wrapper.classList.add("shown")


}
async function get_it_until_not_null(id) {
    let result = null
    let ms = 10
    do {
        await wait_for(ms)
        result = document.getElementById(id)
        if (ms < 100) ms=+5
        console.log(id + " is null")
    } while (result == null)
}
get_it_until_not_null('main')


async function loading_in() {
    let loading_t = document.getElementById("loading_t")
    let txt = loading_t.innerText
   

        // for(var i =0 ; i < 9 ; i++){
            
            while(!page_loaded){
                await wait_for(350)
            let res = txt.slice(-3);
            console.log(res)
            if (res != "...") {
                txt = txt + "."
                loading_t.innerText = txt
            }
            else{
                txt = "Loading"
                await wait_for(550)
                loading_t.innerText = txt   
            }
        }
        await wait_for(200)
        let t_ = 40;
        txt = ""
        txt = txt + "L"
        loading_t.innerText = txt
        await wait_for(t_)
        txt = txt + "o"
        loading_t.innerText = txt
        await wait_for(t_)
        txt = txt + "a"
        loading_t.innerText = txt
        await wait_for(t_)
        txt = txt + "d"
        loading_t.innerText = txt
        await wait_for(t_)
        txt = txt + "e"
        loading_t.innerText = txt
        await wait_for(t_)
        txt = txt + "d"
        loading_t.innerText = txt
        await wait_for(t_)
        txt = txt + "."
        loading_t.innerText = txt
}

//timer function
function wait_for(ms) { return new Promise(resolve => setInterval(resolve, ms)); }