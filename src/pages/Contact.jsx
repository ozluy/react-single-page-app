import React from 'react';
import BasePage from '../BasePage';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import ContentSend from 'material-ui/svg-icons/content/send';
import {fullWhite} from 'material-ui/styles/colors'
import {Card, CardActions,CardTitle, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Contact extends BasePage {
	render() {
		const styles = {
			card:{
				textAlign:'center',
				marginBottom:'15px',
				cardHeader:{
					textAlign:'left'
				}
			},
			clearFix:{
				clear:'both',
				width: '100%',
				display: 'block',
				padding:'15px',
				boxSizing:'border-box'
			},
			twinContainer: {
				padding:'15px',
				width: '50%',
				display:'inline-block',
				boxSizing:'border-box'
			}
		};


		return <div>
			<span style={{fontSize:'24px', fontWeight:'bold'}}>Contact</span>
			<Divider />
			<br />
			<Card style={styles.card}>

				<Subheader style={styles.card.cardHeader}> Address Detail</Subheader>
				<CardTitle
					title="Address"
					subtitle="Subtitle"
				/>
				<CardText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</CardText>
				<CardText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</CardText>
				<CardText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</CardText>
				<CardText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</CardText>
			</Card>
				<Paper>
					<Subheader> Contact Form</Subheader>
			<div style={styles.clearFix}>
				<div style={styles.twinContainer}>
					<TextField
						fullWidth={true}
						hintText="Full Name"
						errorText=""
						floatingLabelText="Full Name"
					/><br />
					<TextField
						fullWidth={true}
						hintText="Phone"
						errorText=""
						floatingLabelText="Phone"
					/><br />
					<TextField
						fullWidth={true}
						hintText="Email"
						errorText=""
						floatingLabelText="Email"
					/><br />
				</div>
				<div style={styles.twinContainer}>
					<TextField
						fullWidth={true}
						hintText="Message"
						errorText=""
						floatingLabelText="Message"
						multiLine={true}
						rows={5}
					/><br />
					<RaisedButton
						label="send"
						fullWidth={true}
						labelPosition="after"
						primary={true}
						backgroundColor="#a4c639"
						icon={<ContentSend color={fullWhite} />}
					/>
				</div>
			</div>
			</Paper>
		</div>
	}
}

module.exports = Contact;