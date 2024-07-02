import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
     ExamContainer,
     SidebarContainer,
     Content,
     ExamHeader,
     ExamForm,
     FormLabel,
     FormInput,
     AddButton
} from '../../styles/ExamStyles';

const CheckExamSection = () => {


    {/* const calculateTotalMarks = () => {
        let total = 0;
        for (let i=0; i < examData.length; i){
            total =  examData[i].marks;
        }
    }*/}
    return (
        <ExamContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <ExamHeader>Exam Details</ExamHeader>
                <ExamForm>
                    <FormLabel>Name: </FormLabel>
                    <FormInput  
                        type="text"
                        required
                    />
                    <FormLabel>Registration Number: </FormLabel>
                    <FormInput  
                        type="text"
                        required
                    />
                    <FormLabel>Class: </FormLabel>
                    <FormInput  
                        type="text"
                        required
                    />
                    <FormLabel>Marks: </FormLabel>
                    <FormInput  
                        type="number"
                        required
                    />
                    <AddButton type="submit">Add Exam</AddButton>
                </ExamForm>

                <h2>Total Marks: </h2>
                <h3>Exam Details: </h3>
                <ul>

                </ul>
            </Content>

        </ExamContainer>

 )
}

export default CheckExamSection;