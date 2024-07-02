import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import EventCalender from "./EventCalender";
import Announcement from "./Announcement";
import Performance from "./Performance";
import axios from "axios"
import {
    AdminDashboardContainer,
    Content,
    TopContent,
    BottomContent,
    Section,
    SectionTitle,
    CardContainer,
    Card,
    CardContent,
    CardTitle

} from '../../styles/DashboardStyles'


const AdminDashboard = () => {
    return (
        <AdminDashboardContainer>
            <Sidebar />
            <Content>
                <TopContent>
                    <Section>
                        <SectionTitle>Overview</SectionTitle>
                        <CardContainer>
                            <Card>
                                <CardTitle>Total Student</CardTitle>
                                <CardContent>500</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Total Teachers</CardTitle>
                                <CardContent>50</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Total Classes</CardTitle>
                                <CardContent>8</CardContent>
                            </Card>
                        </CardContainer>
                    </Section>

                    <Section>
                        <SectionTitle>All Events</SectionTitle>
                    </Section> 

                </TopContent>

                <BottomContent>
                    <Performance />
                    <Announcement />
                </BottomContent>
            </Content>

        </AdminDashboardContainer>

    )
}

export default AdminDashboard