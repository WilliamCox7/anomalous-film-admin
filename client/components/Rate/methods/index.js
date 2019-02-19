import selectOne from './select-one';
import selectTen from './select-ten';

export default function(srch) {
	srch.selectOne = selectOne.bind(srch);
	srch.selectTen = selectTen.bind(srch);
}