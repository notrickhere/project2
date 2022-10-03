const React = require('react')
const DefaultLayout = require('./layouts/Default')
class jordan1Show extends React.Component {
    render() {
        const { jordan1 } = this.props;
        return (
            <DefaultLayout title={"Jordan 1's Profile"}>
                <div className='showPage'>
                    <nav className='editPageNav'>
                        <a href="/jordan1"> Back To Jordan 1's</a>
                        <br />
                        <a href="/"> Back To Home</a>
                    </nav>
                    <br />
                    <div className="jordan1Picture pictureBox">

                    </div>
                    <div className= "">
                        Model: {jordan1.colorWay}
                        <br />

                        Model: {jordan1.price}
                        <br />

                        Is the shoe deadstock? {jordan1.isDeadStock
                        ? "It's deadstock!"
                        : "It's not deadstock!"}
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}


module.exports = jordan1Show