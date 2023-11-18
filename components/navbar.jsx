export function Navbar() {

    return (
        <div>
            <div className="flex flex-row h-24 bg-red-200 items-center">
                <img className="h-24 w-24 rounded-full p-3 ml-2" src="socialcookbooklogo.png"></img>
                <p className="ml-3 text-4xl">Social Cookbook</p>
                <a className="text-xl ml-20 hover:bg-red-300 p-3 rounded-xl" href="/">My Feed</a>
                <a className="text-xl ml-7 hover:bg-red-300 p-3 rounded-xl" href="/user">My Cookbook</a>
                <a className="text-xl ml-7 hover:bg-red-300 p-3 rounded-xl" href="/createpost">Add Recipe</a>
            </div>
        </div>
    )
}