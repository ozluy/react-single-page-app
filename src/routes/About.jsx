import React from 'react';
import BasePage from '../BasePage';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader,  CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FlatButton from 'material-ui/FlatButton';

class About extends BasePage {
	render() {
		const styles = {
			gridList: {
				width: 'auto',
				height: 'auto',
				overflowY: 'auto',
				marginBottom: 24,
				img:{
					width:'33.3%'
				}
			}
		};

		const tilesData = [
			{
				img: './assets/img/starks.jpg',
				title: 'Breakfast',
				author: 'jill111',
			},
			{
				img: './assets/img/starks.jpg',
				title: 'Tasty burger',
				author: 'pashminu',
			},
			{
				img: './assets/img/starks.jpg',
				title: 'Camera',
				author: 'Danson67',
			},
			{
				img: './assets/img/starks.jpg',
				title: 'Morning',
				author: 'fancycrave1',
			},
			{
				img: './assets/img/starks.jpg',
				title: 'Hats',
				author: 'Hans',
			},
			{
				img: './assets/img/starks.jpg',
				title: 'Honey',
				author: 'fancycravel',
			},
			{
				img: './assets/img/starks.jpg',
				title: 'Vegetables',
				author: 'jill111',
			},
			{
				img: './assets/img/starks.jpg',
				title: 'Water plant',
				author: 'BkrmadtyaKarki',
			},
		];
		return <div>
			<span style={{fontSize:'24px', fontWeight:'bold'}}>About</span>
			<Divider />
			<br />
			<Card>
				<CardHeader
					title="URL Avatar"
					subtitle="Subtitle"
					avatar="./assets/img/starks.jpg"
				/>
				<CardText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
					Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
					Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
					Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
					Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
					Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
					Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				</CardText>
				<CardText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
					Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
					Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
					Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
					Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
					Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
					Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				</CardText>
				<GridList
					cellHeight={200}
					style={styles.gridList}
				>
					<Subheader>December</Subheader>
					{tilesData.map((tile) => (
						<GridTile
							key={tile.title}
							title={tile.title}
							subtitle={<span>by <b>{tile.author}</b></span>}
							actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
						>
							<img  src={tile.img} />
						</GridTile>
					))}
				</GridList>
				<CardTitle title="Card title" subtitle="Card subtitle" />

				<CardActions>
					<FlatButton label="Action1" />
					<FlatButton label="Action2" />
				</CardActions>
			</Card>
		</div>
	}
}

module.exports = About;