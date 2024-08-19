import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import MyTable from '../../components/MyTable.js';
import { addToLearn } from '../../store/DataSlice.js';

const New = () => {
	const dispatch = useDispatch();
	const localUserId = useSelector((state) => state?.user?.token?.user_id);
	const data = useSelector((state) => state?.data) || [];
	const newWords = data.filter((obj) => obj.isNew === true);

	const submit = (el) => {
		const changedEl = { ...el, isLearned: true, isNew: false };
		dispatch(addToLearn({ changedEl, localUserId }));
	};

	return (
		<MyTable
			title={'New words'}
			data={newWords}
			callback={submit}
			btnState1=''
			btnState2='Learn'
		/>
	);
};

export default New;
