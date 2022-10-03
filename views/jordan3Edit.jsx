const React = require("react");
const DefaultLayout = require("./layouts/default");

class jordan3Edit extends React.Component {
    render() {
        const {jordan3} = this.props
        return (
            <DefaultLayout title="Edit Page">
                <nav>
                    <a href="/jordan3"> Back To Jordan 3's</a>
                    <br />
                    <a href="/"> Back To Home</a>
                </nav>
                <form
                    action={`/jordan3/${jordan3._id}?_method=PUT`}
                    method="POST" className="wholeContainer editPage"
                >

                    Title:{" "}
                    <input type="text" name="colorWay" defaultValue={jordan3.colorWay} />
                    <br />

                    Entry:{" "}
                    <input type="text" name="price" defaultValue={jordan3.price} />
                    <br />

                    Is Deadstock:
                    {jordan3.isDeadStock ? (
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
module.exports = jordan3Edit;