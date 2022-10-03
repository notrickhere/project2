const React = require("react");
const DefaultLayout = require("./layouts/default");

class jordan1Edit extends React.Component {
    render() {
        const {jordan1} = this.props
        return (
            <DefaultLayout title="Edit Page">
                <nav>
                    <a href="/jordan1"> Back To Jordan 1's</a>
                    <br />
                    <a href="/"> Back To Home</a>
                </nav>
                <form
                    action={`/jordan1/${jordan1._id}?_method=PUT`}
                    method="POST" className="wholeContainer editPage"
                >

                    Title:{" "}
                    <input type="text" name="colorWay" defaultValue={jordan1.colorWay} />
                    <br />

                    Entry:{" "}
                    <input type="text" name="price" defaultValue={jordan1.price} />
                    <br />

                    Is Deadstock:
                    {jordan1.isDeadStock ? (
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
module.exports = jordan1Edit;