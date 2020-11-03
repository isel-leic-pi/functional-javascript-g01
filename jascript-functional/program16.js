function getDependencies(tree) {//not an efficient solution
  
    let ret=[]

    if(tree === undefined || !Object.keys(tree).includes('dependencies'))
        return ret

    
    Object
        .keys(tree.dependencies)
        .forEach(x=>{   ret.push(`${x}@${tree.dependencies[x].version}`); 
                        ret=ret.concat(getDependencies(tree.dependencies[x]))
                    }) 
    
    return ret
            .reduce((acc, curr) => {    if(acc.indexOf(curr)<0) 
                                            acc.push(curr); //removes duplicates
                                        return acc;
                                    }, [])
            .sort()
}

module.exports = getDependencies