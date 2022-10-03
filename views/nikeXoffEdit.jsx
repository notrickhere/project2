const React = require("react");
const DefaultLayout = require("./layouts/default");

class nikeXoffEdit extends React.Component {
    render() {
        const {nikeXoff} = this.props
        return (
            <DefaultLayout title="Edit Page">
                <nav>
                    <a href="/dunkLow"> Back To Off-White's</a>
                    <br />
                    <a href="/"> Back To Home</a>
                </nav>
                <form
                    action={`/nikeXoff/${nikeXoff._id}?_method=PUT`}
                    method="POST" className="wholeContainer editPage"
                >

                    Title:{" "}
                    <input type="text" name="colorWay" defaultValue={nikeXoff.colorWay} />
                    <br />

                    Entry:{" "}
                    <input type="text" name="price" defaultValue={nikeXoff.price} />
                    <br />

                    Is Deadstock:
                    {nikeXoff.isDeadStock ? (
                        <input type="checkbox" name="isDeadStock" defaultChecked />
                    ) : (
                        <input type="checkbox" name="isDeadStock" />
                    )}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        );
    }
}
module.exports = nikeXoffEdit;