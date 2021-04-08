import React from "react";
import HomeHeader from "../Navigation/HomeHeader";
import { makeStyles } from "@material-ui/core/styles";
import {
	Grid,
	TextField,
	Button,
	Typography,
	Container,
	Box,
} from "@material-ui/core";
import { Check, Clear } from "@material-ui/icons";
import { useForm, Controller } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux"

const useStyles = makeStyles((theme) => ({}));

export default function CustomerProfile() {
	const classes = useStyles();
	return (
		<div>
			<HomeHeader />
			<Container maxWidth="lg">
				<Box my={2}>
					<Typography variant="h4" color="primary">
						My Profile
					</Typography>
				</Box>
				<Box>
					
				</Box>
			</Container>
		</div>
	);
}
