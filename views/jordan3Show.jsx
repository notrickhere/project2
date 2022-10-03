const React = require('react')
const DefaultLayout = require('./layouts/Default')
class jordan1Show extends React.Component {
    render() {
        const { jordan3 } = this.props;
        return (
            <DefaultLayout title={"Jordan 3's Profile"}>
                <div className='showPage'>
                    <nav className='editPageNav'>
                        <a href="/jordan3"> Back To Jordan 3's</a>
                        <br />
                        <a href="/"> Back To Home</a>
                    </nav>
                    <br />
                    <div className="jordan3Picture pictureBox">

                    </div>
                    <div className= "">
                        Model: {jordan3.colorWay}
                        <br />

                        Model: {jordan3.price}
                        <br />

                        Is the shoe deadstock? {jordan3.isDeadStock
                        ? "It's deadstock!"
                        : "It's not deadstock!"}
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}


module.exports = jordan1Show