const React = require('react')
const DefaultLayout = require('./layouts/Default')
class DunkLowNew extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <nav>
                    <a href="/dunkLow"> Back To Dunk Lows</a>
                </nav>
                <form action='/dunkLow' method='POST'>
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

module.exports = DunkLowNew