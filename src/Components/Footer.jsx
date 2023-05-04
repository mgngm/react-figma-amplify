import React from 'react'

function Footer() {
    return (
        <footer
            className="flex w-fit md:w-full items-center max-w-xl md:max-w-2xl py-8 md:items-baseline md:text-left justify-between self-center gap-4 dark:text-white flex-col md:flex-row text-xs">
            <div className="flex flex-col gap-1">
                <a href="/" className="font-bold text-2xl">
                    Tswalano Corp.</a>
                <p>Made with ❤️ by Tswalano</p>
                <p> Copyright all rights reserved © 2023</p>
            </div>
        </footer>
    )
}

export default Footer