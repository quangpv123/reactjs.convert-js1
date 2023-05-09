import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
//level 1
import Sum from "./components/Sum"
import LengthString from "./components/LengthString"
import Square from './components/Square'
import LargestNumber from './components/LargestNumber'
import ShortestString from './components/ShortestString'
import AscendingOder from './components/AscendingOder'
import AlphabeOder from './components/AlphabeOder'
import Median from './components/Median'
import WordCount from './components/WordCount'
import ContainA from './components/ContainA'
//level 2
import Exercise21 from './components/level2/Exercise2.1'
import Exercise22 from './components/level2/Exercise2.2'
import Exercise23 from './components/level2/Exercise2.3'
import Exercise24 from './components/level2/Exercise2.4'
import Exercise25 from './components/level2/Exercise2.5'
//level 3
import Exercise31 from './components/level3/Exercise3.1'
import Exercise32 from './components/level3/Exercise3.2'
import Exercise33 from './components/level3/Exercise3.3'
import Exercise34 from './components/level3/Exercise3.4'
import Exercise35 from './components/level3/Exercise3.5'
import Exercise36 from './components/level3/Exercise3.6'
import Exercise37 from './components/level3/Exercise3.7'
import Exercise310 from './components/level3/Exercise3.10'
//level 4
import Exercise41 from './components/level4/Exercise4.1';
import Exercise42 from './components/level4/Exercise4.2';
import Exercise43 from './components/level4/Exercise4.3';
import Exercise46 from './components/level4/Exercise4.6';
import Exercise47 from './components/level4/Exercise4.7';
import Exercise49 from './components/level4/Exercise4.9';
import Exercise410 from './components/level4/Exercise4.10';
//level 5
import Exercise51 from './components/level5/Exercise5.1';
import Exercise52 from './components/level5/Exercise5.2';
import Exercise53 from './components/level5/Exercise5.3';
import Exercise54 from './components/level5/Exercise5.4';
import Exercise55 from './components/level5/Exercise5.5';
import Exercise56 from './components/level5/Exercise5.6';
import Exercise57 from './components/level5/Exercise5.7';
import Exercise58 from './components/level5/Exercise5.8';


function App() {
  return (
    <div className="App">
      <h1 className="text-center font-semibold text-3xl">ReactJS Exercise</h1>
      <Link to='/' className='clear'>CLEAR</Link>
      <div id = "nav" className = 'flex justify-around'>
        <ul>
            <li> <Link to="/sum">Level 1-1: Sum of two number</Link> </li>
            <li> <Link to="/lengthString">Level 1-2: Length of the string</Link></li>
            <li> <Link to="/Square">Level 1-3: Square</Link></li>
            <li> <Link to="/LargestNumber">Level 1-4: Largest number</Link></li>
            <li> <Link to="/ShortestString">Level 1-5: Shortest string</Link></li>
            <li> <Link to="/AscendingOder">Level 1-6: Ascending order</Link></li>
            <li> <Link to="/AlphabeOder">Level 1-7: Alphabetical order</Link></li>
            <li> <Link to="/Median">Level 1-8: Median of the numbers</Link></li>
            <li> <Link to="/WordCount">Level 1-9: The number of words</Link></li>
            <li> <Link to="/ContainA">Level 1-10: The number of strings</Link></li>
        </ul>
        <ul>
          <li> <Link to='/Exercise2.1'>Level 2-1: The second largest number</Link></li>
          <li> <Link to='/Exercise2.2'>Level 2-2: The longest word</Link></li>
          <li> <Link to='/Exercise2.3'>Level 2-3: The longest common </Link></li>
          <li> <Link to='/Exercise2.4'>Level 2-4: The sum of the numbers</Link></li>
          <li> <Link to='/Exercise2.5'>Level 2-5: The maximum sum</Link></li>
        </ul>
        <ul>
          <li> <Link to='/Exercise3.1'>Level 3-1: The second smallest number</Link></li>
          <li> <Link to='/Exercise3.2'>Level 3-2: The maximum difference</Link></li>
          <li> <Link to='/Exercise3.3'>Level 3-3: The longest increasing</Link></li>
          <li> <Link to='/Exercise3.4'>Level 3-4: The largest overlap</Link></li>
          <li> <Link to='/Exercise3.5'>Level 3-5: The smallest positive integer</Link></li>
          <li> <Link to='/Exercise3.6'>Level 3-6: The median</Link></li>
          <li> <Link to='/Exercise3.7'>Level 3-7: The longest palindrome</Link></li>
          <li> <Link to='/Exercise3.10'>Level 3-10: The list sorted</Link></li>
        </ul>
        <ul>
          <li> <Link to='/Exercise4.1'>Level 4-1: The minimum number</Link></li>
          <li> <Link to='/Exercise4.2'>Level 4-2: The number of distinct</Link></li>
          <li> <Link to='/Exercise4.3'>Level 4-3: The length of the longest</Link></li>
          <li> <Link to='/Exercise4.6'>Level 4-6: The maximum product</Link></li>
          <li> <Link to='/Exercise4.7'>Level 4-7: The list sorted</Link></li>
          <li> <Link to='/Exercise4.9'>Level 4-9: The length of the longest</Link></li>
          <li> <Link to='/Exercise4.10'>Level 4-10: The two strings</Link></li>
        </ul>
        <ul>
          <li> <Link to='/Exercise5.1'>Level 5-1: Reverses</Link></li>
          <li> <Link to='/Exercise5.2'>Level 5-2: Chunk</Link></li>
          <li> <Link to='/Exercise5.3'>Level 5-3: Uniq</Link></li>
          <li> <Link to='/Exercise5.4'>Level 5-4: Uniq ArrayObject</Link></li>
          <li> <Link to='/Exercise5.5'>Level 5-5: Group by</Link></li>
          <li> <Link to='/Exercise5.6'>Level 5-6: TrimAll</Link></li>
          <li> <Link to='/Exercise5.7'>Level 5-7: MapKey</Link></li>
          <li> <Link to='/Exercise5.8'>Level 5-8: Switch Order</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/sum" element ={<Sum/>} />
        <Route path="/lengthString" element ={<LengthString />} />
        <Route path="/Square" element ={<Square />} />
        <Route path="/LargestNumber" element ={<LargestNumber />} />
        <Route path="/ShortestString" element ={<ShortestString />} />
        <Route path="/AscendingOder" element ={<AscendingOder />} />
        <Route path="/AlphabeOder" element ={<AlphabeOder />} />
        <Route path="/Median" element ={<Median />} />
        <Route path="/WordCount" element ={<WordCount />} />
        <Route path="/ContainA" element ={<ContainA />} />

        <Route path="/Exercise2.1" element ={<Exercise21 />} />
        <Route path="/Exercise2.2" element ={<Exercise22 />} />
        <Route path="/Exercise2.3" element ={<Exercise23 />} />
        <Route path="/Exercise2.4" element ={<Exercise24 />} />
        <Route path="/Exercise2.5" element ={<Exercise25 />} />
        
        <Route path="/Exercise3.1" element ={<Exercise31 />} />
        <Route path="/Exercise3.2" element ={<Exercise32 />} />
        <Route path="/Exercise3.3" element ={<Exercise33 />} />
        <Route path="/Exercise3.4" element ={<Exercise34 />} />
        <Route path="/Exercise3.5" element ={<Exercise35 />} />
        <Route path="/Exercise3.6" element ={<Exercise36 />} />
        <Route path="/Exercise3.7" element ={<Exercise37 />} />
        <Route path="/Exercise3.10" element ={<Exercise310 />} />

        <Route path="/Exercise4.1" element ={<Exercise41 />} />
        <Route path="/Exercise4.2" element ={<Exercise42 />} />
        <Route path="/Exercise4.3" element ={<Exercise43 />} />
        <Route path="/Exercise4.6" element ={<Exercise46 />} />
        <Route path="/Exercise4.7" element ={<Exercise47 />} />
        <Route path="/Exercise4.9" element ={<Exercise49 />} />
        <Route path="/Exercise4.10" element ={<Exercise410 />} />

        <Route path="/Exercise5.1" element ={<Exercise51 />} />
        <Route path="/Exercise5.2" element ={<Exercise52 />} />
        <Route path="/Exercise5.3" element ={<Exercise53 />} />
        <Route path="/Exercise5.4" element ={<Exercise54 />} />
        <Route path="/Exercise5.5" element ={<Exercise55 />} />
        <Route path="/Exercise5.6" element ={<Exercise56 />} />
        <Route path="/Exercise5.7" element ={<Exercise57 />} />
        <Route path="/Exercise5.8" element ={<Exercise58 />} />

      </Routes>
    </div>
  );
}

export default App;
