const React = require("react");
const DefaultLayout = require("./layouts/default");

class DunkLowEdit extends React.Component {
    render() {
        const {dunkLow} = this.props
        return (
            <DefaultLayout title="Edit Page">
                <nav>
                    <a href="/dunkLow"> Back To Dunk Lows</a>
                    <br />
                    <a href="/"> Back To Home</a>
                </nav>
                <form
                    action={`/dunkLow/${dunkLow._id}?_method=PUT`}
                    method="POST" className="wholeContainer editPage"
                >

                    Title:{" "}
                    <input type="text" name="colorWay" defaultValue={dunkLow.colorWay} />
                    <br />

                    Entry:{" "}
                    <input type="text" name="price" defaultValue={dunkLow.price} />
                    <br />

                    Is Deadstock:
                    {dunkLow.isDeadStock ? (
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
module.exports = DunkLowEdit;