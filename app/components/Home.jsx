"use client";
import { useEffect, useRef, useState } from "react";
import Bar from "./Bar.jsx";
import windowDimensions from "./windowDimensions";

const Home = () => {
	const { width, height } = windowDimensions();
  const totalBars = width > 393 ? 400 : 200;
	let barsArray = useRef([]);

	const [BarEl, setBarEl] = useState();
	const [buttonsClicked, setButtonsClicked] = useState({
		bubbleSort: false,
		quickSort: false
	})

	const newArrayGenerator = () => {
		let barsSet = new Set();
		while (barsSet.size < totalBars) barsSet.add(Math.floor(Math.random() * 1000 + 5));
		barsArray.current = Array.from(barsSet);
		setBarEl(		
			barsArray.current.map(item => {
				return (
					<Bar
						key = {barsArray.current.indexOf(item)}
						length = {item}
					/>
				)
			})
		)
		setButtonsClicked(item => {
			return(
				{
					...item,
					bubbleSort: false,
					quickSort: false,
				}
			)
		})
	};
	useEffect(newArrayGenerator, []);

	const swapper = (array, from, to) => {
		let holder = array[from];
		array[from] = array[to];
		array[to] = holder;
	};

	const delay = (delayInms) => {
		return new Promise(resolve => setTimeout(resolve, delayInms));
	};

	const bubbleSort = async () => {
		if (buttonsClicked.bubbleSort || buttonsClicked.quickSort) return;
		setButtonsClicked(item => {
			return(
				{
					...item,
					bubbleSort: true,
				}
			)
		})
		for (let i = 0; i < barsArray.current.length; i++){
			for (let j = i + 1; j < barsArray.current.length; j++){
				if (barsArray.current[i] > barsArray.current[j]) swapper(barsArray.current, i, j);
			} 
			await delay(1);
			setBarEl(
				barsArray.current.map(item => {
					if (item === barsArray.current[i]) return (
						<Bar
							key = {barsArray.current.indexOf(item)}
							length = {item}
							current = {true}
						/>
					)
					return (
						<Bar
							key = {barsArray.current.indexOf(item)}
							length = {item}
						/>
					)
				}
			));
		}
	};

	const quickSort = async (start, end) => {
		if (start > end || buttonsClicked.quickSort  || buttonsClicked.bubbleSort) return;
		setButtonsClicked(item => {
			return(
				{
					...item,
					quickSort: true,
				}
			)
		})
		let pivotIndex = start;
		for (let i = start; i < end; i++) {
			if (barsArray.current[i] < barsArray.current[end]){
				swapper(barsArray.current, i, pivotIndex);
				pivotIndex++;
			}
		}
		await delay(1);
		swapper(barsArray.current, end, pivotIndex);
		setBarEl(
			barsArray.current.map(item => {
				if (item === barsArray.current[end]) return (
					<Bar
						key = {barsArray.current.indexOf(item)}
						length = {item}
						current = {true}
					/>
				)
				return (
					<Bar
						key = {barsArray.current.indexOf(item)}
						length = {item}
					/>
				)
			}
		)); 
		await Promise.all([quickSort(pivotIndex + 1, end), quickSort(start, pivotIndex - 1)]);
	}

	return (
		<div className="h-page pt-20" id="home">
			<div className="xl:pt-9 xsm:pt-2 flex xl:flex-row xl:justify-center xl:items-end xsm:flex-col xsm:items-center xsm: justify-end">
				{BarEl}
			</div>
			<div className="mx-auto pt-7 xl:w-3/4 xsm:w-5/6 flex justify-around items-center">
				<button 
					className="xl:w-32 xl:h-10 xsm:w-24 xsm:h-8 xsm:text-xs rounded-md bg-yellow-500 text-transform: uppercase text-stone-900 font-bold duration-100 hover:-translate-y-0.5 hover:drop-shadow-sort hover:scale-105 active:translate-y-0.5 active:drop-shadow-none"
					onClick={bubbleSort}
				>
					<span>Bubble Sort</span>
				</button>
				<button 
					className="xl:w-32 xl:h-10 xsm:w-24 xsm:h-8 xsm:text-xs rounded-md bg-yellow-500 text-transform: uppercase text-stone-900 font-bold duration-100 hover:-translate-y-0.5 hover:drop-shadow-sort hover:scale-105 active:translate-y-0.5 active:drop-shadow-none"
					onClick={() => {quickSort(0, barsArray.current.length - 1)}}
				>
					Quick Sort
				</button>
				<button 
					className="xl:w-32 xl:h-10 xsm:w-24 xsm:h-8 xsm:text-xs rounded-md bg-red-600 text-transform: uppercase text-stone-900 font-bold duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:drop-shadow-sort hover:scale-105 active:translate-x-0.5 active:translate-y-0.5 active:drop-shadow-none"
					onClick={newArrayGenerator}
				>
					Randomize
				</button>
			</div>
		</div>
	)
}

export default Home;