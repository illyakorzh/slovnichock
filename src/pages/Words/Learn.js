import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import MyTable from '../../components/MyTable.js';
import { addToLearn } from '../../store/DataSlice.js';

const Learn = () => {
	const dispatch = useDispatch();
	const localUserId = useSelector((state) => state?.user?.token?.user_id);

	const data = useSelector((state) => state?.data) || [];

	const [mixedData, setMixedData] = useState([]);

	useEffect(() => {
		setMixedData(data.filter((obj) => obj.isLearned === true));
	}, [data]);

	function submit(el) {
		const changedEl = { ...el, isLearned: false };
		dispatch(addToLearn({ changedEl, localUserId }));
	}

	function shuffleArray() {
		const shuffledData = mixedData.slice();
		shuffledData.sort(() => Math.random() - 0.5);
		setMixedData(shuffledData);
	}

	return (
		<MyTable
			title={'Learn words'}
			data={mixedData}
			callback={submit}
			btnState2='To Learned'
			btnState1='To Learned'
			isMix
			callbackMix={shuffleArray}
		/>
	);
};

export default Learn;
