const React = require('react')
const DefaultLayout = require('./layouts/Default')
class nikeXoffNew extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <nav>
                    <a href="/nikeXoff"> Back To Off-White's</a>
                </nav>
                <form action='/nikeXoff' method='POST'>
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

module.exports = nikeXoffNew