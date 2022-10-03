const React = require('react')
const DefaultLayout = require('./layouts/Default')
class jordan1New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <nav>
                    <a href="/jordan1"> Back To Jordan 1's</a>
                </nav>
                <form action='/jordan1' method='POST'>
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

module.exports = jordan1New