/*
INSTRUCTIONS

Navigator

On October 28, 1994, Netscape Navigator was released, helping millions explore 
the early web.

Given an array of browser commands you executed on Netscape Navigator, return 
the current page you are on after executing all the commands using the 
following rules:

    - You always start on the "Home" page, which will not be included 
      in the commands array.
    - Valid commands are:
        · "Visit Page": Where "Page" is the name of the page you are 
          visiting. For example, "Visit About" takes you to the "About" 
          page. When you visit a new page, make sure to discard any 
          forward history you have.
        · "Back": Takes you to the previous page in your history or 
          stays on the current page if there isn't one.
        · "Forward": Takes you forward in the history to the page you 
          came from or stays on the current page if there isn't one.

For example, given ["Visit About Us", "Back", "Forward"], return "About Us".
*/

function navigate(commands) {
    let historyNavigation = ['Home']
    let indexHistory = 0

    for (const command of commands) {
        const sizeHistory = historyNavigation.length - 1

        if (command === 'Back' && indexHistory > 0) {
            indexHistory--
        }

        if (command === 'Forward' && indexHistory < sizeHistory) {
            indexHistory++
        }

        if (command.startsWith('Visit ')) {
            const pageWeb = command.replace('Visit ', '')

            if (indexHistory < sizeHistory) {
                historyNavigation.splice(indexHistory + 1)
            }
            historyNavigation.push(pageWeb)
            indexHistory = historyNavigation.length - 1
        }
    }

    return historyNavigation[indexHistory]
}


module.exports = navigate
