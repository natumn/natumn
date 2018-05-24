
'use strict';

const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Website',
		url: 'https://natumn.github.io'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/natumndb'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/natumn'
	},
	{
		label: 'hatena-Blog',
		url: 'http://nktafuse.hatenablog.com/'
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>Hi! I’m natumn. Go and Haskell programmer.<br/>Like compiler and server side!</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
