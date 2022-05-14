import React from 'react';

const Loading = () => {
    return (
        // <div class="flex items-center justify-center space-x-2 animate-pulse" style={{ height: '80vh' }}>
        //     <div class="w-8 h-8 bg-secondary rounded-full"></div>
        // </div>
        <div class="flex items-center justify-center space-x-2 animate-bounce" style={{ height: '80vh' }}>
            <div class="w-8 h-8 bg-primary rounded-full"></div>
            <div class="w-8 h-8 bg-secondary rounded-full"></div>
            <div class="w-8 h-8 bg-accent rounded-full"></div>
        </div>
    );
};

export default Loading;