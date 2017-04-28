
#################################
# Learning the mean of a sample #
#################################


library(animation)
library(scales)


rm(list = ls())

# ADJUST WORKING DIRECTORY TO YOUR OWN SITUATION!
mainDir = "/Users/dominiquepaul/xJob/AI_web_application/R_code"
#mainDir = "/Users/Johannes/OneDrive/Unterricht/Machine Learning und KI/Scripts Base Topics"
setwd(mainDir)





start = 1     # Learning iteration at which animation starts
eta = 0.9   # Set of etas to show for MBAs is {0.9, 0.2 ,0.01}


nSample = 500 # Sample size
nAnim  = 20   # Number of plots for the animation


# Create new directory that contains everything for the animation
# and set this as workind directory
animDirName = paste0("anim_mean_eta", eta, "_start", start)
dir.create(animDirName, showWarnings = FALSE)
setwd(file.path(mainDir, animDirName))


# Draw sample from normal distribution, get values into data frame
set.seed(1)
sd = 0.25 # standard deviation 
values = rnorm(nSample, mean = 3, sd = sd)
values = round(values, digits = 2)   # rounding


learnTable = as.data.frame(matrix(NA,nrow = nSample, ncol = 4))
names(learnTable) = c("sample", "pos", 
                      "error","update")

learnTable$sample = values



# Initialize learner
pos = max(learnTable$sample + sd)   # This is outside of all observations


for (i in 1:nSample){
  
  learnTable$pos[i] = pos
  
  # In this case, we have "moving targets" 
  # The target is observation i, so every time in the learning process, 
  # it's a different one
  
  # The next three lines are the core of the learning process
  error = pos - learnTable$sample[i]
  update = eta*error
  pos = pos - update
  
  # Bookkeeping
  learnTable$error[i] = error
  learnTable$update[i] = update
}

learnTable = na.omit(learnTable)


# ANIMATION
###########

ypos = 0
learnTable$ypos = ypos

yposRep = rep(ypos, length(values))

# The ultimate target, unknown to learner
ultTarget = mean(learnTable$sample)

#range of x values to be shown in plot
xlim = c(min(learnTable$sample) - sd/2, 
         max(max(learnTable$sample), max(learnTable$pos)))

#i = 1  # For testing only

saveHTML({
  ani.options(interval = 1)
  
  # This is the loop producing the plots for the animation
  for (i in start:(start + nAnim)) {
    
    # The first plot, showing the distance of the learner to its moving target
    ######
    
    
    
    
    # plot the sample on a horizontal line 
    plot(values, yposRep, pch = 16, cex = 1, col = "#B0B0B0",
         
         # The range of x
         xlim = c(min(learnTable$sample) - sd/2, 
                  max(max(learnTable$sample), max(learnTable$pos))),
         
         # The range of y
         ylim = c(-0.5, 1.5),
         
         # axis labels
         xlab = "Data / Learner's position", ylab = "",
         
         # no axes
         axes = FALSE)
    
    # just the horizontal axis
    axis(side = 1)
    
    # add box
    box()
    
    # add the ultimate target to canvas as a fat square
    points(ultTarget, ypos, pch = 15, cex = 2, col = " red3")
    
    # label the ultimate target
    text(ultTarget, ypos+0.1, paste0("The red square shows the mean that is to be discovered (value = ", round(ultTarget, digits = 2), ")"), 
         pos = 3, offset = 2.5, cex = 1)
    text(ultTarget, ypos, paste0("Note: The turqoise dot can only see one orange dot at a time!"), 
         pos = 3, offset = 2.5, cex = 1)
    
    # the learning dot
    points(learnTable$pos[i], learnTable$ypos[i], pch = 16, cex = 2, col = "turquoise")
    
    # the current target (not the same as the ultimate target)
    points(learnTable$sample[i], learnTable$ypos[i], pch = 16, cex = 1.5, 
           col = alpha("red", 0.5))
    
    # an arrow indicating the distance between learner and current target
    arrows(learnTable$pos[i], -0.15, x1 = learnTable$sample[i], y1 = -0.15,
           col = "red", code = 3)
    
    # Place a couple of comments onto the canvas
    
      # First the text pieces for the comments ....
    
    comment1 = paste0("Note, the first: ", start - 1, " learning iterations are not shown.",
                      "\nStart with learning iteration ", start)
    
    comment2 = paste0("Learning rate (eta) = ", eta)
    
    comment3 = paste0("Current iteration: ", i)
    
    comment4 = paste0("Lerner's position: ", round(learnTable$pos[i], digits = 2))

    
    commentCex = 1.3   # font size of comment
    
    commentXpos = ultTarget-0.2   # x-position of comments

    
    # And now placing them on the canvas
    
    # This one only if we do not start the animation with the first observation
    # See ?text for further details of the text() function.
    if (start>1) {
      text(commentXpos, 1.2, pos = 4, # position of text
           comment1, 
           col = "red3", cex = commentCex)
    }
    
    text(commentXpos, 0.9, pos = 4,# position of text
         comment2, 
         col = "blue", cex = commentCex)
    
    
    text(commentXpos, 0.7, pos = 4,# position of text
         comment3, 
         col = "turquoise", cex = commentCex)
    
    text(commentXpos, 0.5, pos = 4,# position of text
         comment4, 
         col = "orangered1", cex = commentCex)
    
    title(main = paste0("The turqoise dot is to discover the red square..."), 
          outer = TRUE, line = -3, cex.main = 1.5)
    
    
    # The second plot
    ####
    
    # The next lines are exactly the same as above
    plot(values, yposRep, pch = 16, cex = 1, col = "#B0B0B0",
         
         # The range of x
         xlim = c(min(learnTable$sample) - sd/2, 
                  max(max(learnTable$sample), max(learnTable$pos))),
         
         # The range of y
         ylim = c(-0.5, 1.5),
         
         # axis labels
         xlab = "Data / Learner's position", ylab = "",
         
         # no axes
         axes = FALSE)
    
    # just the horizontal axis
    axis(side = 1)
    
    # add box
    box()
    
    
    points(ultTarget, ypos, pch = 15, cex = 2, col = " red3")
    
    text(ultTarget, ypos+0.1, paste0("The red square shows the mean that is to be discovered (value = ", round(ultTarget, digits = 2), ")"), 
         pos = 3, offset = 2.5, cex = 1)
    text(ultTarget, ypos, paste0("Note: The turqoise dot can only see one orange dot at a time!"), 
         pos = 3, offset = 2.5, cex = 1)
    
    # the learning dot's old position before updating, with light color
    points(learnTable$pos[i], learnTable$ypos[i], pch = 16, cex = 2, 
           col = alpha("turquoise", 0.3))
    
    # The learning dot's new position after updating
    points(learnTable$pos[i] - learnTable$update[i], learnTable$ypos[i], 
           pch = 16, cex = 2, 
           col = "turquoise")
    
    # the current target 
    points(learnTable$sample[i], learnTable$ypos[i], pch = 16, cex = 1.5, 
           col = alpha("red", 0.5))
    
    
    # The learners move, indicated by an arrow
    arrows(learnTable$pos[i], 0, 
           x1 = learnTable$pos[i] - learnTable$update[i], y1 = 0, col = "turquoise")
    
    
    
    # An arrow indicating the distance of the old position of the learner to the
    # current target
    arrows(learnTable$pos[i], -0.15, x1 = learnTable$sample[i], y1 = -0.15,
           col = "red", code = 3)
    
    
    # And the same comments as above
    
    if (start>1) {
      text(commentXpos, 1.2, pos = 4, # position of text
           comment1, 
           col = "red3", cex = commentCex)
    }
    
    text(commentXpos, 0.9, pos = 4,# position of text
         comment2, 
         col = "blue", cex = commentCex)
    
    
    text(commentXpos, 0.7, pos = 4,# position of text
         comment3, 
         col = "turquoise", cex = commentCex)
    
    text(commentXpos, 0.5, pos = 4,# position of text
         comment4, 
         col = "orangered1", cex = commentCex)
  
    
    title(main = paste0("The turqoise dot is to discover the red square..."), 
          outer = TRUE, line = -3, cex.main = 1.5)
    
    ani.pause()
  }
}, imgdir = "IMG_learnMean", htmlfile = "learnMean.html",
autobrowse = TRUE, 
title = "Learning mean",
navigator = TRUE,
verbose = FALSE,
ani.width = 1500, ani.height = 500)




# NOTE: Update decreases with approaching 
# target. This procedure is equivalent to
# gradient descent with loss function
# L = 1/2(x-t)^2












# Next cases: Learn a parameter, instead of a single point. The points are
# inputs to the parameter

# Different loss functions