
function Emailme() {
    return (
        <section className="flex flex-col items-center gap-3 mt-3 rounded-lg mx-auto bg-[rgb(217_217_217)] max-w-lg ">
            <h1 className="text-[15px] font-bold mt-2">Email me</h1>
            <form action="" className="flex flex-col w-full px-2 gap-5 pb-3">
                <textarea type="text" name="usertext" placeholder="What on you mind for me" className="w-full border rounded-3xs p-2 text-[15px] outline-none"></textarea>
                <input type="text" name="name" placeholder="Your name" className="border text-[15px] rounded-3xs p-2 outline-none" />
                <input type="email" placeholder="yourname@mail.com" className="text-[15px] border rounded-3xs p-2 outline-none" />
                <input type="submit" value="Submit" className="rounded-full text-lg font-bold mx-20 bg-[rgb(64_119_192)] text-white active:bg-white active:text-[rgb(64_119_192)] hover:bg-[rgb(24,63,114)] outline-none border-none" />
            </form>
        </section>
    )
}

export default Emailme