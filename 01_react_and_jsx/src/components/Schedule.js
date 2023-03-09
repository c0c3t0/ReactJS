import NavTabs from "./NavTabs";
import TabPanes from "./TabPanes";

const Schedule = () => {
    return (
        <div class="container">
            <div class="row me-row schedule" id="schedule">
                <h2 class="row-title content-ct">Event Schedule</h2>
                <div class="col-md-12">
                    <NavTabs />
                    <TabPanes />
                </div>
            </div>
        </div>
    )
};

export default Schedule;