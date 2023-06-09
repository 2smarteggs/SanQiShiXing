import React, {useRef, useState} from 'react';
import SEMuiFloatingActionButton from "../Common/SEMuiFloatingActionButton";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProgressBar from "./ProgressBar";
import {useUser} from "../../contexts/UserContext";
import AddHistoryFood from "./AddHistoryFood";
import {Button} from "@mui/material";
import SEModal from "../Common/SEModal";
import AddNewFood from "./AddNewFood";

const ProgressSection = () => {
    const { user, updateUser } = useUser();

    const progressRefCarbon = useRef();
    const progressRefProtein = useRef();
    const fabRef = useRef();

    const [modalVisible, setModalVisible] = useState(false);
    const [showNewFoodModal, setShowNewFoodModal] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleCloseAddFoodModal = () => {
        setShowNewFoodModal(false);
    };


    const handleClick = (e) => {
        progressRefCarbon.current.play(50);
        progressRefProtein.current.play(85);
    }

    const handleClickB = (e) => {
        progressRefCarbon.current.reset();
        progressRefProtein.current.reset();
    }

    const handleClickC = (e) => {
        fabRef.current.tic();
        updateUser({
            name: "aaa",
        });
        handleOpenModal();
    }

    return(<>
        <button onClick={handleClick}>aaa</button>
        <button onClick={handleClickB}>bbb</button>
        <button onClick={handleClickC}>ccc</button>

        <Container maxWidth="sm">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    碳水化合物
                </Grid>
                <Grid item xs={8}>
                    <ProgressBar ref={progressRefCarbon} />
                </Grid>
                <Grid item xs={4}>
                    蛋白质
                </Grid>
                <Grid item xs={8}>
                    <ProgressBar ref={progressRefProtein} />
                </Grid>
            </Grid>
        </Container>
        <SEMuiFloatingActionButton
            ref={fabRef}
        />
        <SEModal mode="dialog" show={modalVisible} onClose={handleCloseModal} actionButton={
            <Button variant="contained" onClick={(e) => {setShowNewFoodModal(true)}} fullWidth>添加新食物</Button>
        }>
            <AddHistoryFood />
        </SEModal>
        <SEModal mode="dialog" show={showNewFoodModal} onClose={handleCloseAddFoodModal} actionButton={
            <Button variant="contained" fullWidth>添加</Button>
        }>
            <AddNewFood />
        </SEModal>
    </>)
};

export default ProgressSection;