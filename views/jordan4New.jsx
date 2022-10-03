const React = require('react')
const DefaultLayout = require('./layouts/Default')
class jordan4New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <nav>
                    <a href="/jordan4"> Back To Jordan 4's</a>
                </nav>
                <form action='/jordan4' method='POST'>
                    Color Way: <input type='text' name='colorWay' />
                    <br />
                    Price: <input type='textarea' name='price' />
                    <br />
                    Is Deadstock: <input type='checkbox' name='isDeadstock' />
                    <br />
                    <input type='submit' name="" value="Create Shoe" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = jordan4New