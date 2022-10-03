const React = require('react')
const DefaultLayout = require('./layouts/Default')
class jordan4Show extends React.Component {
    render() {
        const { jordan4 } = this.props;
        return (
            <DefaultLayout title={"Jordan 4's Profile"}>
                <div className='showPage'>
                    <nav className='editPageNav'>
                        <a href="/jordan4"> Back To Jordan 4's</a>
                        <br />
                        <a href="/"> Back To Home</a>
                    </nav>
                    <br />
                    <div className="jordan4Picture pictureBox">

                    </div>
                    <div className= "">
                        Model: {jordan4.colorWay}
                        <br />

                        Model: {jordan4.price}
                        <br />

                        Is the shoe deadstock? {jordan4.isDeadStock
                        ? "It's deadstock!"
                        : "It's not deadstock!"}
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}


module.exports = jordan4Show