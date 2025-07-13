import useDictionary from '@/hooks/useDictionary';

import MountainHiking from '@/assets/icons/mountain-hiking.svg';
import MovieWatching from '@/assets/icons/movie-watching.svg';
import Photography from '@/assets/icons/photography.svg';
import Travelling from '@/assets/icons/travelling.svg';

const dictionary = useDictionary();



const hobbies = [
    {
        id: 1,
        image: Travelling,
        title: 'Travelling',
        description: 'Exploring new places',
    },
    {
        id: 2,
        image: MountainHiking,
        title: 'Mountain Hiking',
        description: 'Conquering peaks',
    },
    {
        id: 3,
        image: Photography,
        title: 'Photography',
        description: 'Capturing moments',
    },
    {
        id: 4,
        image: MovieWatching,
        title: 'Movie Watching',
        description: 'Enjoying stories',
    },
];

export default hobbies;
